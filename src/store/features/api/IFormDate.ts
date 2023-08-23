interface IFormData {
  playerName: string;
  discountName: string;
  paymentService: string;
}

export interface IFormDataProduct extends IFormData {
  productId?: number;
}