import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const Navigation = () => {
    const items = [
        {
            label: 'Menu',
            icon: 'pi pi-fw pi-file',
          
        },
        {
            label: 'Catalogo',
            icon: 'pi pi-fw pi-user-plus',
            items: [
                {
                    label: 'Hombre',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Mujer',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Infantil',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Unisex',
                    icon: 'pi pi-fw pi-users'
                },

            ]
        },
        {
            label: 'Mi Cuenta',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        },

                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <Menubar
                            model={items}
                            start={<InputText placeholder="Search" type="text" />}
                            end={<Button label="Logout" icon="pi pi-power-off" />}
                        />
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;