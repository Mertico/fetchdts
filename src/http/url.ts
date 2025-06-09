export interface TypedURLSearchParams<QueryMap extends Record<string, string> | unknown = Partial<Record<string, string>>> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size) */
  readonly size: number
  /**
   * Appends a specified key/value pair as a new search parameter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
   */
  append: <T extends keyof QueryMap>(name: T | string & {}, value: QueryMap[T]) => void
  /**
   * Deletes the given search parameter, and its associated value, from the list of all search parameters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
   */
  delete: <T extends keyof QueryMap>(name: T | string & {}, value?: QueryMap[T]) => void
  /**
   * Returns the first value associated to the given search parameter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
   */
  get: <T extends keyof QueryMap>(name: T | string & {}) => QueryMap[T] | null
  /**
   * Returns all the values association with a given search parameter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
   */
  getAll: <T extends keyof QueryMap>(name: T | string & {}) => Array<QueryMap[T]>
  /**
   * Returns a Boolean indicating if such a search parameter exists.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
   */
  has: <T extends keyof QueryMap>(name: T, value?: QueryMap[T]) => boolean
  /**
   * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
   */
  set: <T extends keyof QueryMap>(name: T, value: QueryMap[T]) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort) */
  sort: () => void
  /** Returns a string containing a query string suitable for use in a URL. Does not include the question mark. */
  toString: () => string
  forEach: (callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any) => void
}
