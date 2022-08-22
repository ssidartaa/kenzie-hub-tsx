import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { HeadersDefaults } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";

interface IProviderProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  techs: ITech[];
  bio?: string;
  contact?: string;
  created_at?: string;
  updated_at?: string;
  avatar_url?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export type IEdit = Omit<ITech, "id" | "title">;

interface IAuthValue {
  user: IUser | null;
  loading: boolean;
  signIn: (account: ILogin) => void;
  logout: () => void;
  createUser: (account: IRegister) => void;
  to: (link: string) => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  modalId: string;
  setModalId: Dispatch<SetStateAction<string>>;
  techs: ITech[];
  currentTechId: string | null;
  setCurrentTechId: Dispatch<SetStateAction<string | null>>;
  createTech: (tech: ITech) => void;
  editTech: (status: IEdit) => void;
  deleteTech: () => void;
}

interface IProfile {
  data: IUser;
}

interface ISessions {
  data: { user: IUser; token: string };
}

interface IHeaderProps extends HeadersDefaults {
  Authorization: string;
}

export const AuthContext = createContext<IAuthValue>({} as IAuthValue);

const AuthProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzieHub:token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as IHeaderProps;

          const { data }: IProfile = await api.get("/profile");

          setUser(data);

          setTechs(
            data.techs.sort((a, b) =>
              a.title > b.title ? 1 : a.title === b.title ? 0 : -1
            )
          );

          navigate("/dashboard", { replace: true });
        } catch (err) {
          toast.error("❌ Ops! Algo deu errado.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          });
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [navigate]);

  const signIn = (account: ILogin) => {
    api
      .post("sessions", account)
      .then(({ data }: ISessions) => {
        setUser(data.user);

        localStorage.setItem("@kenzieHub:token", data.token);

        navigate("/dashboard", { replace: true });

        return toast.success("✔️ O usuário logou com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("❌ Ops! Algo deu errado.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const logout = () => {
    localStorage.clear();
    toast.success("✔️ O usuário deslogou com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const createUser = (account: IRegister) => {
    api
      .post("/users", account)
      .then(() => {
        toast.success("✔️ Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch(() =>
        toast.error("❌ Ops! Algo deu errado.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const to = (link: string) => {
    navigate(`/${link}`, { replace: true });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalId, setModalId] = useState("");
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);
  const [currentTechId, setCurrentTechId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    if (token) {
      api.get("/profile").then(({ data }: IProfile) => {
        setTechs(
          data.techs.sort((a, b) =>
            a.title > b.title ? 1 : a.title === b.title ? 0 : -1
          )
        );
      });
    }
  }, [isModalVisible]);

  const createTech = (tech: ITech) => {
    api
      .post("/users/techs", tech)
      .then(() => {
        setIsModalVisible(false);

        return toast.success("✔️ Tech criada com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("❌ Já existe alguma Tech com esse mesmo nome.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const editTech = (status: IEdit) => {
    api
      .put(`/users/techs/${currentTechId}`, status)
      .then(() => {
        setIsModalVisible(false);

        return toast.success("🔄 Tech alterada com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("❌ Ops! Algo deu errado.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const deleteTech = () => {
    api.delete(`/users/techs/${currentTechId}`).then(() => {
      setIsModalVisible(false);

      toast.success("🗑️ Tech removida com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        logout,
        createUser,
        to,
        isModalVisible,
        setIsModalVisible,
        modalId,
        setModalId,
        techs,
        currentTechId,
        setCurrentTechId,
        createTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
