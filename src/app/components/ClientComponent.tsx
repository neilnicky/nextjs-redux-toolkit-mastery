"use client";
import { setData } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ClientComponent({ serverData }: { serverData: any }) {
  const dispatch = useDispatch();

  const initialData = useSelector((state: any) => state.data);

  useEffect(() => {
    if (serverData) {
      dispatch(setData(serverData)); // Set Redux store with server-fetched data
    }
  }, [serverData, dispatch]);

  return (
    <div>
      Data has been loaded into Redux store.
      <div>
        <p>{JSON.stringify(initialData)}</p>
      </div>
    </div>
  );
}
