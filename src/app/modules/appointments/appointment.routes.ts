import express from 'express';
import { appointmentController } from './appointment.controller';

const router = express.Router();

router.post('/book-appointment', appointmentController.bookAppointment);

router.patch(
  '/cancel-appointment/:id',
  appointmentController.canceledAppointment
);
router.patch(
  '/finish-appointment/:id',
  appointmentController.finishAppointment
);

router.get('/', appointmentController.getAllAppointment);

router.get('/patient/:id', appointmentController.getAllAppointmentsByPatients);

router.get('/doctor/:id', appointmentController.getAllAppointmentsByDoctors);

router.get('/:id', appointmentController.getSingleAppointment);
router.patch('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

export const appointmentRoutes = router;
