const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
  };
  
  // Middleware para capitalizar la primera letra de cada nombre
  
  const capitalizeFirstLetter = (store) => (next) => (action) => {
    if (action.payload && Array.isArray(action.payload)) {
      const payloadWithCapitalizedNames = action.payload.map((pokemon) => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      }));
  
      const updatedAction = { ...action, payload: payloadWithCapitalizedNames };
      next(updatedAction);
    } else {
      next(action);
    }
  };
  
  // Middleware para ordenar los nombres alfabéticamente
  
  const sortAlphabetically = (store) => (next) => (action) => {
    if (action.payload && Array.isArray(action.payload)) {
      const sortedPayload = action.payload.slice().sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return nameA.localeCompare(nameB);
      });
  
      const updatedAction = { ...action, payload: sortedPayload };
      next(updatedAction);
    } else {
      next(action);
    }
  };
  
  export { logger, capitalizeFirstLetter, sortAlphabetically };
  