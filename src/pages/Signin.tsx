import { useCallback } from 'react';
import { FormValues } from '@models/signin';
import Form from '@/components/signin/Form';

function SignInPage() {
  const handleSubmit = useCallback((formValues: FormValues) => {
    console.log('values', formValues);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default SignInPage;
