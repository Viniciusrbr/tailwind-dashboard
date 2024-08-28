import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import NavItem from './NavItem'

export default function MainNavigation() {
  return (
    <nav>
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projetos" icon={SquareStack} />
      <NavItem title="Tarefas" icon={CheckSquare} />
      <NavItem title="Relatórios" icon={Flag} />
      <NavItem title="Usuários" icon={Users} />
    </nav>
  )
}
