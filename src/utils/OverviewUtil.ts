 export const getCurrentMonthObject = (data: any[]): any | null => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based
    const currentYear = currentDate.getFullYear();
  
    for (const obj of data) {
      if (obj.month === currentMonth && obj.year === currentYear) {
        return obj;
      }
    }
  
    return null; // If no match is found
  }