import express, { Application, Request, Response } from 'express';
import axios from 'axios';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

