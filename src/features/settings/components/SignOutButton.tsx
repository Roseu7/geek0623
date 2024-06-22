'use client';

import React from 'react';
import { Button } from '@chakra-ui/react';

export default function SignOutButton() {
  return (
    <div>
      <form action="/auth/logout" method="post">
        <Button colorScheme="teal" type='submit'>ログアウト</Button>
      </form>
    </div>
  )
}