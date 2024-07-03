import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Email from '@/pages/Email';
import { Error } from '@/pages/Error';
import { Question } from '@/pages/Question';
import { Root } from '@/pages/Root';
import { Start } from '@/pages/Start';
import Success from '@/pages/Success';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path='/' element={<Start />} />
      <Route path='/quiz/:id' element={<Question />} />
      <Route path='/email' element={<Email />} />
      <Route path='/success' element={<Success />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);
