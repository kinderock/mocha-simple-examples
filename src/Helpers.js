class Helpers {
  calcProgress(current, total) {
    return Math.floor((current / total) * 100);
  }

  isUser(data) {
    return data.error ? null : true;
  }

  getUserName(data) {
    return data.error ? null : `${data.first_name} ${data.last_name}`;
  }
}

export default new Helpers();
