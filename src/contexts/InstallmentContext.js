import React from "react";

const InstallmentContext = React.createContext(null);
export const InstallmentConsumer = InstallmentContext.Consumer;

export function InstallmentProvider({children}) {
    const [installmentData, setInstallmentData] = React.useState({monthlyInstallment: 0});

    const getInstallmentData = async (url) => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setInstallmentData(jsonData.data);
      };

    const installmentContextValue = {
        getInstallmentData,
        installmentData
    }

    return (
        <InstallmentContext.Provider value={installmentContextValue}>
			{children}
		</InstallmentContext.Provider>
    );
}

export default InstallmentContext;