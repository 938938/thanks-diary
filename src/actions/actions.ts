'use server';

import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types_db';
import { Item } from '@/model/type';

export type ItemInsert = Database['public']['Tables']['diarylist']['Insert'];

const errorHandler = (error: Error) => {
  throw new Error(error.message);
};

const supabase = createClient(
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
  `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
);

export const createItem = async (item: ItemInsert) => {
  const { data, error } = await supabase.from('diarylist').insert({
    ...item,
  });

  if (error) {
    errorHandler(error);
  }

  return data;
};

export const getList = async (): Promise<Item[] | null> => {
  const { data, error } = await supabase.from('diarylist').select('*');
  if (error) {
    errorHandler(error);
  }
  return data;
};
