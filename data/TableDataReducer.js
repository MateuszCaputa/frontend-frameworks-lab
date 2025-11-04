/**
 * (Lab 5, Task 4)
 * Reducer function for managing the state of the sortable data table.
 * Handles setting initial data and sorting by column.
 *
 * @param {object} state - The current state ({ data: [], originalData: [] }).
 * @param {object} action - The action dispatched (e.g., { type: 'sort_asc', payload: 'user' }).
 * @returns {object} - The new state.
 */
export default function TableDataReducer(state, action) {
  switch (action.type) {
    case "set_data":
      // Set initial data and keep a copy for 'natural sort'
      return {
        data: action.payload,
        originalData: action.payload,
      };

    case "sort_asc": {
      const column = action.payload;
      const sortedData = [...state.data].sort((a, b) => {
        if (!a[column] || !b[column]) return 0; // Guard against missing data

        if (column === "user") return a.user.name.localeCompare(b.user.name);
        if (column === "post") return a.post.title.localeCompare(b.post.title);
        if (column === "comments") return a.comments.length - b.comments.length;
        return 0;
      });
      return { ...state, data: sortedData };
    }

    case "sort_desc": {
      const column = action.payload;
      const sortedData = [...state.data].sort((a, b) => {
        if (!a[column] || !b[column]) return 0; // Guard against missing data

        if (column === "user") return b.user.name.localeCompare(a.user.name);
        if (column === "post") return b.post.title.localeCompare(a.post.title);
        if (column === "comments") return b.comments.length - a.comments.length;
        return 0;
      });
      return { ...state, data: sortedData };
    }

    case "sort_natural":
      // Revert to the original, unsorted data
      return { ...state, data: state.originalData };

    default:
      return state;
  }
}
