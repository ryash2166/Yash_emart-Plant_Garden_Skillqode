import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Input, InputAdornment } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const { t, i18n } = useTranslation();

  const locales = {
    en: { title: "English" },
    in: { title: "Indonesian" },
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col item-center justify-center  min-h-screen bg-[#f2f6f9]">
      <div className="mx-auto container px-4">
        <div className="max-w-xl w-full mx-auto">
          <div className="gap-6 sm:p-12 pb-12 mx-auto bg-white my-auto border border-gray shadow-lg">
            <img
              src="https://dev.orbitaccount.id/images/Logo.png"
              alt="Logo"
              className="mb-5 sm:mb-8 md:visible invisible h-8 mx-auto"
            />
            <h3 className="text-2xl font-bold text-center">
              {t("main.login")}
              <span className="text-[#40b5e8] ml-1">{t("main.skill")}</span>
            </h3>
            <p className="mx-auto mt-3 text-xs font-normal text-center sm:text-sm text-gray-400 md:max-w-xs">
              {t("main.to")}
              <span className="font-semibold">Orbit SSO</span>{" "}
              {t("main.details")}{" "}
              <span className="font-semibold">{t("main.in")}</span>.
            </p>
            <form action="" autoComplete="off" className="grid gap-4 mt-6 px-4">
              <div className="w-full text-left ">
                <label className="relative block mb-2 text-sm font-medium text-black">
                  {t("main.email")} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder={t("main.PE")}
                  className="bg-white focus:outline-none px-5 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-[#40b5e8] transition border border-gray rounded-md undefined"
                />
              </div>
              <div className="w-full text-left">
                <label className="relative block mb-2 text-sm font-medium text-black">
                  {t("main.Password")} <span className="text-red-500">*</span>
                </label>
                <Input
                  type={values.showPassword ? "text" : "password"}
                  placeholder={t("main.PP")}
                  className=" bg-white focus:outline-none px-5 py-2.5  text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md "
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="text-right w-full">
                <p className="px-0 py-0.5 text-sm  text-[#40b5e8] hover:!text-sky-500 hover:underline">
                  {t("main.password")}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm undefined text-white bg-[#40b5e8] hover:bg-sky-500 hover:text-white"
              >
                {t("main.log")}
              </button>
              <p class="text-sm text-center">{t('main.have')} <NavLink to='/register' className="text-[#40b5e8] hover:underline">{t('main.register')}</NavLink></p>
            </form>
          </div>
          <di className="flex flex-col sm:flex-row items-center  flex-wrap justify-center sm:justify-between gap-4 text-sm py-4">
            <div className="relative flex items-center order-2 sm:order-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height="16px"
                width="16px"
                className="absolute right-2 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
              <select
                className="border border-slate-300 bg-white px-2 py-0 rounded leading-5 h-7 outline-none w-30 appearance-none pr-7 truncate"
                onClick={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue={i18n.resolvedLanguage}
              >
                {Object.keys(locales).map((locale) => (
                  <option key={locale} value={locale}>
                    {locales[locale].title}
                  </option>
                ))}
              </select>
            </div>
            <div className="order-1 sm:order-2 flex items-center flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.about")}
              </p>
              <span className="text-gray-500">|</span>
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.policy")}
              </p>
              <span className="text-gray-500">|</span>
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.terms")}
              </p>
            </div>
          </di>
        </div>
      </div>
    </div>
  );
};

// export default Login

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <Login />
    </Suspense>
  );
}
