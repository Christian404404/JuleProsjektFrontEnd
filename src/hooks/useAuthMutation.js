import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin, register as apiRegister } from "../api/auth.js";
import { useNavigate } from "react-router-dom";

export function useAuthMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries(["me"]);
      navigate("/profile");
    },
  });

  const registerMutation = useMutation({
    mutationFn: apiRegister,
    onSuccess: (data) => {
      navigate("/login");
    },
  });

  return { loginMutation, registerMutation };
}
