import { createAction, props } from "@ngrx/store";

export const additem = createAction('[todolist component] additem', props<{content: string}>);
// export const deleteitem = createAction('[todolist component] deleteitem', props<>);