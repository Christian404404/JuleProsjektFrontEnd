import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../api/user.js";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["me"],
    queryFn: fetchProfile,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes default stale time
    onError: () => {
      localStorage.removeItem("token");
      queryClient.clear();
      navigate("/login");
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  };

  return {
    user: data,
    isLoading,
    isError,
    error,
    logout,
  };
}
