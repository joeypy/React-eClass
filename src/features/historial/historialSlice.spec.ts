import historialReducer, {
  add,
  HistorialState,
  remove,
} from "./historialSlice";

describe("counter reducer", () => {
  const initialState: HistorialState[] = [
    {
      id: 1,
      user: "joey",
      artist: "reik",
      track: "noviembre sin ti",
    },
    {
      id: 2,
      user: "joey",
      artist: "sin bandera",
      track: "mientras tan bien",
    },
  ];

  it("should handle initial state", () => {
    expect(historialReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle add item into list", () => {
    const actual = historialReducer(
      initialState,
      add({
        id: 3,
        user: "joey",
        artist: "mana",
        track: "mariposa traicionera",
      })
    );
    expect(actual.length).toEqual(3);
  });

  it("should handle add item into list", () => {
    const actual = historialReducer(
      initialState,
      remove({
        id: 2,
        user: "joey",
        artist: "sin bandera",
        track: "mientras tan bien",
      })
    );
    expect(actual.length).toEqual(1);
  });
});
