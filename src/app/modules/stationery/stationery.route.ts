import express from 'express';
import { StationeryController } from './stationery.controller.js';

const router = express.Router();

router.post('/products', StationeryController.createStationery);

router.get('/products', StationeryController.getAllStationery);

export const StationeryRoute = router;
