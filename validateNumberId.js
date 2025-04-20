const validateNumberId = (numberid) => {
    const validIds = ['p', 'f', 'e', 'r'];
    return validIds.includes(numberid);
  };
  
  module.exports = { validateNumberId };
  