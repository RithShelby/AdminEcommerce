import React from 'react';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';

export const FilterComponent = ({
                                    filterText,
                                    onFilter,
                                    placeholder = 'Search',
                                    create,
                                    value,
                                    onChange,
                                    options,
                                    dropdown = false,
                                    optionLabel
                                }) => {
    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-plus" className="mr-2" onClick={create} />
        </React.Fragment>
    );

    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText value={filterText} onChange={onFilter} placeholder={placeholder} />
        </IconField>
    );

    // Conditionally render endContent only if value, onChange, and options are provided
    const endContent = dropdown ?
         (
            <Dropdown
                value={value}
                onChange={onChange}
                options={options}
                optionLabel={optionLabel}
                placeholder="Select Here"
                className="w-full md:w-14rem"
            />
        ) : null;

    return (
        <Toolbar className="d-flex justify-content-end border-0" start={startContent} center={centerContent} end={endContent}  />
    );
};
