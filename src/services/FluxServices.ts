import { IAddIncomeData, IAddOutcomeData } from '../types';
import IncomeDataServices from './IncomeDataServices';
import OutcomeDataServices from './OutcomeDataServices';

export const getAllIncomes = async () => {
  try {
    const response = await IncomeDataServices.getAll();
    return response.data;
  } catch (error) {
    console.error('Error when using getAllIncomes : ', error);
    return [];
  }
};

export const createIncome = async (data: IAddIncomeData) => {
  try {
    await IncomeDataServices.create(data);
  } catch (error) {
    console.error('Error when using createIncome : ', error);
  }
};

export const getAllOutcomes = async () => {
  try {
    const response = await OutcomeDataServices.getAll();
    return response.data;
  } catch (error) {
    console.error('Error when using getAllOutcomes : ', error);
    return [];
  }
};

export const createOutcome = async (data: IAddOutcomeData) => {
  try {
    await OutcomeDataServices.create(data);
  } catch (error) {
    console.error('Error when using createOutcome : ', error);
  }
};
