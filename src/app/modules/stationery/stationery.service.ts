import type { TStationery } from './stationery.interface.js';
import { Stationery } from './stationery.model.js';

const createStationery = async (stationeryData: TStationery) => {
  const stationery = new Stationery(stationeryData);
  const result = await stationery.save();
  return result;
};

const getAllStationery = async () => {
  const result = await Stationery.find();
  return result;
};

const getSingleStationery = async (id: string) => {
  const result = await Stationery.findById(id);
  return result;
};

export const StationeryService = {
  createStationery,
  getAllStationery,
  getSingleStationery,
};
