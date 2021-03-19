interface IProduct {
  id: string;
  type: 'digital' | 'physical';
  weightInKg?: number;
  sizeInMb?: number;
}
