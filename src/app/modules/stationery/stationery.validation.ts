import { z } from 'zod';

const stationeryValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  brand: z.string().min(1, { message: 'Brand cannot be empty' }),
  price: z.coerce.number().positive({ message: 'Price must be greater than 0' }),
  category: z.string().min(1, { message: 'Category cannot be empty' }),
  description: z.string().min(1, { message: 'Description cannot be empty' }),
  quantity: z.coerce
    .number()
    .int({ message: 'Quantity must be an integer' })
    .nonnegative({ message: 'Quantity cannot be negative' }),
  inStock: z.preprocess((val) => {
    if (val === 'true') return true;
    if (val === 'false') return false;
    return val;
  }, z.boolean()),
});

export default stationeryValidationSchema;
