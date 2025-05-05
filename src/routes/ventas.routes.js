import { Router } from 'express';
import {  obtenerVentasConDetalles} from '../controllers/ventas.controller.js';
import { obtenerVentas } from '../controllers/Ventasd.controller.js';

const router = Router();

// Ruta para obtener todas las ventas
router.get('/ventas', obtenerVentasConDetalles);

// Ruta para obtener todas las ventas
router.get('/obtenerventas', obtenerVentas);

export default router;
