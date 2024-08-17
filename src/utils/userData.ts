const getUserData = (ctx: any) => {
    const { name, phone, email } = ctx.user || {}
    return { name, phone, email }
}

export { getUserData }
