import { useAppDispatch } from '../hooks/store';
import { UserId, addNewUser, deleteUserById } from '../store/users/slices';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const handleRemoveUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  }

  const handleAddUser = ({ name, email, github }) => {
    dispatch(addNewUser({ name, email, github }))
  }

  return { removeUser: handleRemoveUser, addNewUser: handleAddUser}
}