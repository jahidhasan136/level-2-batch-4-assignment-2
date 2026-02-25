import type { Request, Response } from 'express';
import stationeryValidationSchema from './stationery.validation.js';
import { Stationery } from './stationery.model.js'; // ✅ fixed

const createStationery = async (req: Request, res: Response) => {
  try {
    const { stationery } = req.body;

    const zodParseData = stationeryValidationSchema.parse(stationery);

    const result = await Stationery.create(zodParseData);

    res.status(201).json({
      success: true,
      message: 'Stationery created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create stationery',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const getAllStationery = async (req: Request, res: Response) => {
  try {
    const result = await Stationery.find();

    res.status(200).json({
      success: true,
      message: 'Stationery retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to retrieve stationery',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const StationeryController = { createStationery, getAllStationery };
