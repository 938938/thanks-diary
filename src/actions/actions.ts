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
  const { data, error } = await supabase
    .from('diarylist')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    errorHandler(error);
  }
  return data;
};

export const deleteItem = async (id: number) => {
  const { data, error } = await supabase
    .from('diarylist')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    errorHandler(error);
  }

  return data;
};

export const addLikesItem = async (id: number, likes: number) => {
  const { data, error } = await supabase
    .from('diarylist')
    .update({ likes: likes })
    .eq('id', id)
    .select();

  if (error) {
    errorHandler(error);
  }

  return data;
};
