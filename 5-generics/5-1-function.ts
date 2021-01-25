{
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // generic 사용방법
  function checkNotNull<T>(arg: T): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
