export const Message = {
    passwordShouldStrong: 'Password must contain one uppercase, one digit and minimum of 8 characters',
    passwordShouldMatch: 'Passwords should match',
    validPhoneNumber: 'Invalid Phone number',
    notFound: 'Not Found',
    invalidCredentials: 'Invalid Credentials',
    loginSuccessfully: 'Successfully logged in',
    invalidOldPassword: 'Invalid Old Password',
    passwordReset: 'Your password is successfully reset',
    updated: 'Successfully updated',
    deleted: 'Successfully deleted',
    created: 'Successfully created',
    error: 'Error occurred',
    notAuthorized: 'You are not authorized for this task',
    tokenExpire: 'Token expired, Please signin again',
    fetched: 'Successfully fetched data',
    isBlocked: 'This account is blocked',
    isUnBlocked: 'This account is unblocked',
    logoutSuccessfully: 'Successfully Logged Out',
    alreadyExist: 'already exists',
    alreadyPublished: 'Already published',
    emailSent: 'We have sent code to your email address',
    otpExpired: 'OTP time out',
    invalidOTP: 'Invalid OTP',
    validOTP: 'Valid OTP',
  }
  export const getNotFoundMessage = (title: string) => {
    return `${title} not found`
  }
  export const deletedMessage = (title: string) => {
    return `${title} deleted successfully`
  }
  export const UpdatedMessage = (title: string) => {
    return `${title} successfully updated`
  }
  export const CreatedMessage = (title: string) => {
    return `${title} created successfully`
  }