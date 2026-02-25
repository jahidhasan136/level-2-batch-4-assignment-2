import { model, Schema } from 'mongoose';
import type { TStationery } from './stationery.interface.js';

const stationerySchema = new Schema<TStationery>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const Stationery = model<TStationery>('Stationery', stationerySchema);
