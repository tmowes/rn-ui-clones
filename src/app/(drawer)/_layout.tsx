import { Drawer } from 'expo-router/drawer'

import { DrawerContent } from '@/components/drawer/drawer-content'
import { CustomOptions } from '@/types/navigation'

const drawerItems = [
  {
    name: '(tabs)',
    options: {
      title: 'Todas as Caixas de entrada',
      iconName: 'all-inbox',
      notifications: 5,
      isDivider: true,
    } as CustomOptions,
  },
  {
    name: 'inbox',
    options: {
      title: 'Entrada',
      iconName: 'inbox',
      notifications: 3,
      isDivider: true,
    } as CustomOptions,
  },
  {
    name: 'starts',
    options: {
      title: 'Com estrelas',
      iconName: 'star-outline',
    } as CustomOptions,
  },
  {
    name: 'postponed',
    options: {
      title: 'Adiados',
      iconName: 'schedule',
    } as CustomOptions,
  },
  {
    name: 'important',
    options: {
      title: 'Importante',
      iconName: 'label-important-outline',
    } as CustomOptions,
  },
  {
    name: 'send',
    options: {
      title: 'Enviado',
      iconName: 'send',
    } as CustomOptions,
  },
  {
    name: 'programmed',
    options: {
      title: 'Programado',
      iconName: 'schedule-send',
    } as CustomOptions,
  },
  {
    name: 'exit-box',
    options: {
      title: 'Caixa de saída',
      iconName: 'outbox',
    } as CustomOptions,
  },
  {
    name: 'sketch',
    options: {
      title: 'Rascunho',
      iconName: 'note',
    } as CustomOptions,
  },
  {
    name: 'all-emails',
    options: {
      title: 'Todos os e-mails',
      iconName: 'email',
    } as CustomOptions,
  },
  {
    name: 'span',
    options: {
      title: 'Spam',
      iconName: 'info-outline',
    } as CustomOptions,
  },
  {
    name: 'trash',
    options: {
      title: 'Lixeira',
      iconName: 'delete-outline',
      isDivider: true,
    } as CustomOptions,
  },
  {
    name: 'read',
    options: {
      title: 'Lixeira',
      iconName: 'label-important-outline',
      sectionTitle: 'Marcadores',
    } as CustomOptions,
  },
  {
    name: 'general',
    options: {
      title: 'Lixeira',
      iconName: 'label-important-outline',
      isDivider: true,
    } as CustomOptions,
  },
  {
    name: 'new-marker',
    options: {
      title: 'Criar novo',
      iconName: 'add',
      isDivider: true,
    } as CustomOptions,
  },
  {
    name: 'config',
    options: {
      title: 'Configurações',
      iconName: 'settings',
    } as CustomOptions,
  },
  {
    name: 'feedback',
    options: {
      title: 'Enviar feedback',
      iconName: 'feedback',
    } as CustomOptions,
  },
  {
    name: 'help',
    options: {
      title: 'Ajuda',
      iconName: 'help-outline',
    } as CustomOptions,
  },
]

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false, drawerStyle: { width: '75%' } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {drawerItems.map((item) => (
        <Drawer.Screen key={item.name} name={item.name} options={item.options} />
      ))}
    </Drawer>
  )
}
