import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useCustomMutation = (mutationFn, queryKey) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState(null);

  const { mutate } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      setData(response);
      queryClient.invalidateQueries(queryKey);
    },
  });

  return { mutate, data };
};