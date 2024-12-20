import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {getCategories} from "./api/api";
import type {ICatergoriesState} from "@/entities/catergories/model/model";

export const useCategories = create<ICatergoriesState>()(
    devtools(
        (set) => ({
            categories: [],
            actionGetCategories: async () => {
                const data = await getCategories();

                set({categories: data}, false, "categories/set-categories");
            }
        })
    )
)