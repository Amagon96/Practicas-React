import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Badge, TextInput } from '@tremor/react';
import { useUserActions } from '../hooks/useUserActions'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateNewUser() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);
  const { addNewUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target
    const formData = new FormData(form)
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    if (!name || !email || !github) return setResult('ko')

    addNewUser({ name, email, github })
    setResult('ok')
    form.reset()
  }

  return (
    <>
      <Button onClick={handleOpen}>
        Create New User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} className="">
            <TextInput name="name" placeholder="Aquí el nombre" />
            <TextInput name="email" placeholder="Aquí el email" />
            <TextInput name="github" placeholder="Aquí el usuario de GitHub" />

            <div>
              <Button type="submit" style={{ marginTop: "16px" }}>
                Crear usuario
              </Button>
              <span>
                {result === "ok" && (
                  <Badge color='green'>Guardado correctamente</Badge>
                )}
                {result === "ko" && <Badge color='red'>Error con los campos</Badge>}
              </span>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
