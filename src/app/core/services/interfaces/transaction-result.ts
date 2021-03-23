import { MessageDetail } from './message-detail';

export interface TransactionResult<TData> {
  type: number;
  message: string;
  success: boolean;
  fail: boolean;
  warning: boolean;
  data: TData;
  messages: string[];
}
