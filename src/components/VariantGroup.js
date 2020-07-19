import React, { useContext } from 'react';
import { VariantContext } from './VariantProvider';

export const VariantGroupContext = React.createContext();

export default function VariantGroup({ id, fallback = 'none', children }) {
	const variantGroups = useContext(VariantContext);

	const group = variantGroups[id];

	return (
		<VariantGroupContext.Provider
			value={{
				variantToRender: group?.assignment || fallback,
				data: { ...globalData, ...group?.data } || globalData,
			}}
		>
			{children}
		</VariantGroupContext.Provider>
	);
}
