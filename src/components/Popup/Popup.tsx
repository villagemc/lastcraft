import { closePopup } from '@store/features/popupSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { useState, useEffect, useRef, type FC, ChangeEvent, FormEvent } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { IFormDataProduct } from '@store/features/api/IFormDate';
import { useFetchPrice } from '@effects/fetch';
import { ApiResponse } from '@store/features/api/IPrice';

const Popup: FC = () => {
  const { createPrice, isLoading } = useFetchPrice();

  const { isPopup } = useAppSelector(state => state.popup);
  const info = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  const popup = useRef<HTMLDivElement | null>(null);

  // Работа с полями:
  const [formPrice, setFormPrice] = useState<number | string | undefined>();
  const [formSubmit, setFormSubmit] = useState<boolean>(true);
  const [formError, setFormError] = useState<string>('');

  const defaultValues: IFormDataProduct = {
    playerName: '',
    discountName: '',
    paymentService: 'ANYPAY'
  }

  const [formValues, setFormValues] = useState<IFormDataProduct>(defaultValues);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // Получаем неймы и передаем в них значения:
    const { name, value } = e.target;

    const updatedValues: IFormDataProduct = {
      ...formValues,
      [name]: value,
      productId: info.id
    };

    setFormValues(updatedValues);

    // Обработка ошибок:
    if (updatedValues.playerName.length === 0) {
      setFormError("Заполните поле!");
      setFormSubmit(true);
    }

    if (updatedValues.playerName.length < 3) {
      setFormError("Никнейм не меньше 3 символов!");
      setFormSubmit(true);
    }
        
    if (updatedValues.playerName.length > 16) {
      setFormError("Никнейм не больше 16 символов!");
      setFormSubmit(true);
    }
    
    // Дополнительная валидация:
    try {
      const { data, error }: ApiResponse = await createPrice(updatedValues);

      if (isLoading) {
        setFormPrice("Загрузка цены...");
      }

      if (error) {
        setFormError("Неверный никнейм!");
        setFormSubmit(true);
      }

      if (data) {
        setFormError("");
        setFormSubmit(false);
        setFormPrice(data.response);
      }
    } catch (error) {
      console.log(error);
    }
    
    console.log(updatedValues);
  }

  // Отправка формы:
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  }
  
  // Отключение попапа и очистка полей/цены, отключение формы:
  const eventClosePopup = () => {
    dispatch(closePopup());

    setFormValues(defaultValues);
    setFormPrice(undefined);
    setFormSubmit(true);
  }

  // Отключение попапа по кнопке ESC:
  const keyboardClosePopup = (e: KeyboardEvent) => {
    if (!isPopup) return;
    if (e.key === 'Escape') eventClosePopup();
  }

  // Отключение попапа при клике по оверлею/крестику:
  const overlayClosePopup = (e: MouseEvent) => {
    if (!isPopup) return;
    if (e.target === popup.current) eventClosePopup();
  }

  useEffect(() => {
    window.addEventListener('keydown', keyboardClosePopup);
    window.addEventListener('click', overlayClosePopup);

    return () => {
      window.removeEventListener('keydown', keyboardClosePopup);
      window.removeEventListener('click', overlayClosePopup);
    }
  });

  return (
    <div className={"popup" + (isPopup ? " popup_active" : "")} ref={popup}>
      <div className="popup__container">
        <VscChromeClose className="popup__close" onClick={eventClosePopup} />
        <h3 className="popup__title">{info.name}</h3>
        <p className="popup__subtitle">{info.description}</p>
        <form className="popup__form" onSubmit={handleSubmit}>
          <fieldset className="popup__block">
            <label className="popup__label" htmlFor="playerName">Введите никнейм:</label>
            <input
              type="text"
              className="popup__input"
              placeholder="Никнейм"
              id="playerName"
              name="playerName"
              onChange={handleChange}
              value={formValues.playerName}
            />
            <span className="popup__error">{formError}</span>
          </fieldset>
          <fieldset className="popup__block">
            <label className="popup__label" htmlFor="discountName">Введите промокод:</label>
            <input
              type="text"
              className="popup__input"
              placeholder="Промокод"
              id="discountName"
              name="discountName"
              onChange={handleChange}
              value={formValues.discountName}
            />
          </fieldset>
          <div className="popup__choice">
            <p className="popup__method">Выберите способ оплаты:</p>
            <fieldset className="popup__block popup__block_change">
              <input
                type="radio"
                className="popup__change"
                value="ANYPAY"
                id="ANYPAY"
                name="paymentService"
                onChange={handleChange}
                checked={"ANYPAY" === formValues.paymentService}
              />
              <label
                className="popup__label popup__label_change"
                htmlFor="ANYPAY"
              >AnyPay - банковские карты</label>
            </fieldset>
            <fieldset className="popup__block popup__block_change">
              <input
                type="radio"
                className="popup__change"
                value="YOOMONEY"
                id="YOOMONEY"
                name="paymentService"
                onChange={handleChange}
                checked={"YOOMONEY" === formValues.paymentService}
              />
              <label
                className="popup__label popup__label_change"
                htmlFor="YOOMONEY"
              >ЮMoney (Яндекс.Деньги)</label>
            </fieldset>
            <a
              className="popup__label popup__label_link"
              target="_blank"
              href="https://vk.com/lastcraft"
            >Нет подходящего способа?</a>
          </div>
          <button className="popup__button" type="submit" disabled={formSubmit}>
            Купить за {formPrice ?? info.price} РУБ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;