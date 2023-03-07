export interface UserState {
  id: number;
  fullName: string;
  email: string;
  dni: string;
  phone: string;
}

const initialState: UserState = {
  id: 0,
  fullName: "",
  email: "",
  dni: "",
  phone: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        id: action.payload.id,
        fullName: action.payload.fullName,
        email: action.payload.email,
        dni: action.payload.dni,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default userReducer;

export const updateUser = (
  data: UserState
) => ({
  type: "UPDATE_USER",
  payload: {
    id: data.id,
    fullName: data.fullName,
    email: data.email,
    dni: data.dni,
    phone: data.phone,
  },
});
