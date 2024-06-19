import { useCallback } from 'react';
import { FormValues } from '@models/signin';
import Form from '@/components/signin/Form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/remote/firebase';
import { useAlertContext } from '@/components/contexts/AlertContext';

function SignInPage() {
  const { open } = useAlertContext();
  const handleSubmit = useCallback(async (formValues: FormValues) => {
    const { email, password } = formValues;

    const response = await signInWithEmailAndPassword(auth, email, password);

    console.log('values', formValues);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default SignInPage;
