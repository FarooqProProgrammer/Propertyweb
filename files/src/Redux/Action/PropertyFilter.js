function PropertyFilter(user) {
  console.log(user);
  return {
    type: "PROPERTY_FILTER",
    data: user,
  };
}

export { PropertyFilter };
