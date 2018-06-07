/**
 * This helper function helps truncate the name of a logged in user
 * @param {string} fullname
 * @return {string} a string with the first-name and the first letter of the last name.
 */
const truncateName = (fullname: string) => {
  if (typeof fullname !== 'string' || !fullname || !fullname.trim()) {
    return 'Full name must be a string';
  }

  const firstname = fullname.split(' ')[0];
  const lastnameInitials = fullname.split(' ')[1].slice(0, 1);
  return `${firstname} ${lastnameInitials}.`;
};

export default truncateName;
