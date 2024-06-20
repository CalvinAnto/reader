import { useReadable, useWritable } from "./use-shared-store";

export const useBlank = () => useWritable("blank", "https://pp.tori.my.id/m/error.jpg");