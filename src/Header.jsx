function Header({headerInfo,cname,children}) {

//    console.log(p)
//    console.log(p.headerInfo)
//    console.log(p.headerInfo.email)
//    console.log(p.headerInfo.phone)

    // let {headerInfo,cname}=p;
    // console.log(headerInfo)
    // console.log(p)
    // console.log(p.cname)
    // console.log(cname)

    return(
        <div>
        <h1>Header||{cname}|{headerInfo.email} |{headerInfo.phone}</h1>
        {children}
        <div>Hello Wscubetech</div>
        <div>ReactApp</div>
        </div>
    )
}

// export default Header;
export {Header};
