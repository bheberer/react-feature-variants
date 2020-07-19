import React, { useContext } from 'react';

export const VariantContext = React.createContext();

export default function VariantProvider({ variantGroups, children, globalData }) {
	return (
		<VariantContext.VariantProvider value={{ varaints }}>{children}</VariantContext.VariantProvider>
	);
}
