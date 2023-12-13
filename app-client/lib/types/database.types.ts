export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  conferati: {
    Tables: {
      event: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      event_role: {
        Row: {
          created_at: string
          event: number | null
          id: number
          person: number | null
          role: string | null
        }
        Insert: {
          created_at?: string
          event?: number | null
          id?: number
          person?: number | null
          role?: string | null
        }
        Update: {
          created_at?: string
          event?: number | null
          id?: number
          person?: number | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_role_event_fkey"
            columns: ["event"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          }
        ]
      }
      filtertypes_st: {
        Row: {
          created_at: string | null
          id: number
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          type: string
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      organization: {
        Row: {
          created_at: string
          id: number
          name: string
          type: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          type: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "filtertypes_st"
            referencedColumns: ["type"]
          }
        ]
      }
      organization_role: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          organization: number
          person: number
          start_date: string | null
          title: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          organization: number
          person: number
          start_date?: string | null
          title: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          organization?: number
          person?: number
          start_date?: string | null
          title?: string
        }
        Relationships: []
      }
      person: {
        Row: {
          birthdate: string | null
          created_at: string
          first_name: string
          id: number
          last_name: string
          local_image_url: string | null
          wikipedia_page: string | null
        }
        Insert: {
          birthdate?: string | null
          created_at?: string
          first_name: string
          id?: number
          last_name: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          first_name?: string
          id?: number
          last_name?: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  filters: {
    Tables: {
      app_whitefilter_st: {
        Row: {
          app_id: number
          column_address: string
          created_at: string | null
          filter_type: string
          id: number
          table_address: string
        }
        Insert: {
          app_id: number
          column_address?: string
          created_at?: string | null
          filter_type: string
          id?: number
          table_address: string
        }
        Update: {
          app_id?: number
          column_address?: string
          created_at?: string | null
          filter_type?: string
          id?: number
          table_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_whitefilter_st_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "app"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "app_whitefilter_st_filter_type_fkey"
            columns: ["filter_type"]
            isOneToOne: false
            referencedRelation: "filtertypes_st"
            referencedColumns: ["type"]
          },
          {
            foreignKeyName: "app_whitefilter_st_table_address_fkey"
            columns: ["table_address"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      module_section_columns_shown: {
        Row: {
          column_position: number
          id: number
          module_section_id: number
          record_table_column_labels_id: number
          ui_links_to_record: boolean
        }
        Insert: {
          column_position: number
          id?: number
          module_section_id: number
          record_table_column_labels_id: number
          ui_links_to_record?: boolean
        }
        Update: {
          column_position?: number
          id?: number
          module_section_id?: number
          record_table_column_labels_id?: number
          ui_links_to_record?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "module_section_columns_shown_module_section_id_fkey"
            columns: ["module_section_id"]
            isOneToOne: false
            referencedRelation: "module_section"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_columns_shown_record_table_column_labels_id_fkey"
            columns: ["record_table_column_labels_id"]
            isOneToOne: false
            referencedRelation: "record_table_column_labels"
            referencedColumns: ["id"]
          }
        ]
      }
      record_page_columns_shown: {
        Row: {
          column_position: number | null
          id: number
          page_record_id: number
          record_table_column_labels_id: number
          ui_links_to_record: boolean
        }
        Insert: {
          column_position?: number | null
          id?: number
          page_record_id: number
          record_table_column_labels_id: number
          ui_links_to_record?: boolean
        }
        Update: {
          column_position?: number | null
          id?: number
          page_record_id?: number
          record_table_column_labels_id?: number
          ui_links_to_record?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "record_page_columns_shown_page_record_id_fkey"
            columns: ["page_record_id"]
            isOneToOne: false
            referencedRelation: "page_record"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_page_columns_shown_record_table_column_labels_id_fkey"
            columns: ["record_table_column_labels_id"]
            isOneToOne: false
            referencedRelation: "record_table_column_labels"
            referencedColumns: ["id"]
          }
        ]
      }
      record_section_blackfilter_st: {
        Row: {
          column_address: string
          created_at: string | null
          filter_type: string
          id: number
          record_section_id: number
          table_address: string
        }
        Insert: {
          column_address?: string
          created_at?: string | null
          filter_type: string
          id?: number
          record_section_id: number
          table_address: string
        }
        Update: {
          column_address?: string
          created_at?: string | null
          filter_type?: string
          id?: number
          record_section_id?: number
          table_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_section_blackfilter_st_filter_type_fkey"
            columns: ["filter_type"]
            isOneToOne: false
            referencedRelation: "filtertypes_st"
            referencedColumns: ["type"]
          },
          {
            foreignKeyName: "record_section_blackfilter_st_record_section_id_fkey"
            columns: ["record_section_id"]
            isOneToOne: false
            referencedRelation: "record_section"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_blackfilter_st_table_address_fkey"
            columns: ["table_address"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      record_section_columns_shown: {
        Row: {
          column_position: number | null
          id: number
          record_section_id: number
          record_table_column_labels_id: number
          ui_links_to_record: boolean
        }
        Insert: {
          column_position?: number | null
          id?: number
          record_section_id: number
          record_table_column_labels_id: number
          ui_links_to_record?: boolean
        }
        Update: {
          column_position?: number | null
          id?: number
          record_section_id?: number
          record_table_column_labels_id?: number
          ui_links_to_record?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "record_section_columns_shown_record_section_id_fkey"
            columns: ["record_section_id"]
            isOneToOne: false
            referencedRelation: "record_section"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_columns_shown_record_table_column_labels_id_fkey"
            columns: ["record_table_column_labels_id"]
            isOneToOne: false
            referencedRelation: "record_table_column_labels"
            referencedColumns: ["id"]
          }
        ]
      }
      record_section_whitefilter_st: {
        Row: {
          column_address: string
          created_at: string | null
          filter_type: string
          id: number
          record_section_id: number
          table_address: string
        }
        Insert: {
          column_address?: string
          created_at?: string | null
          filter_type: string
          id?: number
          record_section_id: number
          table_address: string
        }
        Update: {
          column_address?: string
          created_at?: string | null
          filter_type?: string
          id?: number
          record_section_id?: number
          table_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "record_section_whitefilter_st_filter_type_fkey"
            columns: ["filter_type"]
            isOneToOne: false
            referencedRelation: "filtertypes_st"
            referencedColumns: ["type"]
          },
          {
            foreignKeyName: "record_section_whitefilter_st_record_section_id_fkey"
            columns: ["record_section_id"]
            isOneToOne: false
            referencedRelation: "record_section"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_whitefilter_st_table_address_fkey"
            columns: ["table_address"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      app: {
        Row: {
          admin: string | null
          created_at: string
          home_module_url_name: string | null
          id: number
          logo_url: string
          url_name: string
        }
        Insert: {
          admin?: string | null
          created_at?: string
          home_module_url_name?: string | null
          id?: number
          logo_url: string
          url_name: string
        }
        Update: {
          admin?: string | null
          created_at?: string
          home_module_url_name?: string | null
          id?: number
          logo_url?: string
          url_name?: string
        }
        Relationships: []
      }
      module_section: {
        Row: {
          app_filter_on_table: string | null
          created_at: string
          id: number
          joining_table: string | null
          module_section_data: number
          page_module: number
          record_table: string
          richtext: string | null
          second_parent_table: string | null
          title: string
          vertical_page_position: number | null
        }
        Insert: {
          app_filter_on_table?: string | null
          created_at?: string
          id?: number
          joining_table?: string | null
          module_section_data: number
          page_module: number
          record_table: string
          richtext?: string | null
          second_parent_table?: string | null
          title: string
          vertical_page_position?: number | null
        }
        Update: {
          app_filter_on_table?: string | null
          created_at?: string
          id?: number
          joining_table?: string | null
          module_section_data?: number
          page_module?: number
          record_table?: string
          richtext?: string | null
          second_parent_table?: string | null
          title?: string
          vertical_page_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "module_section_app_filter_on_table_fkey"
            columns: ["app_filter_on_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_joining_table_fkey"
            columns: ["joining_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_module_section_data_fkey"
            columns: ["module_section_data"]
            isOneToOne: false
            referencedRelation: "module_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_page_module_fkey"
            columns: ["page_module"]
            isOneToOne: false
            referencedRelation: "page_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_section_record_table_fkey"
            columns: ["record_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "module_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      module_section_data: {
        Row: {
          description: string | null
          get_section_data_sql: string
          id: number
        }
        Insert: {
          description?: string | null
          get_section_data_sql: string
          id?: number
        }
        Update: {
          description?: string | null
          get_section_data_sql?: string
          id?: number
        }
        Relationships: []
      }
      page_module: {
        Row: {
          app: string
          created_at: string
          id: number
          title: string | null
          url_name: string
        }
        Insert: {
          app: string
          created_at?: string
          id?: number
          title?: string | null
          url_name: string
        }
        Update: {
          app?: string
          created_at?: string
          id?: number
          title?: string | null
          url_name?: string
        }
        Relationships: []
      }
      page_record: {
        Row: {
          app: string
          created_at: string
          description: string | null
          id: number
          record_name: string
          title: string
        }
        Insert: {
          app: string
          created_at?: string
          description?: string | null
          id?: number
          record_name: string
          title: string
        }
        Update: {
          app?: string
          created_at?: string
          description?: string | null
          id?: number
          record_name?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_record_app_fkey"
            columns: ["app"]
            isOneToOne: false
            referencedRelation: "app"
            referencedColumns: ["url_name"]
          },
          {
            foreignKeyName: "page_record_record_name_fkey"
            columns: ["record_name"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      record_section: {
        Row: {
          createdAt: string
          id: number
          joining_table: string | null
          page_record: number
          record_section_data: number
          richtext: string | null
          second_parent_table: string | null
          title: string | null
          vertical_page_position: number | null
        }
        Insert: {
          createdAt?: string
          id?: number
          joining_table?: string | null
          page_record: number
          record_section_data: number
          richtext?: string | null
          second_parent_table?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
        Update: {
          createdAt?: string
          id?: number
          joining_table?: string | null
          page_record?: number
          record_section_data?: number
          richtext?: string | null
          second_parent_table?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "record_section_joining_table_fkey"
            columns: ["joining_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "record_section_page_record_fkey"
            columns: ["page_record"]
            isOneToOne: false
            referencedRelation: "page_record"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_record_section_data_fkey"
            columns: ["record_section_data"]
            isOneToOne: false
            referencedRelation: "record_section_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "record_section_second_parent_table_fkey"
            columns: ["second_parent_table"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["name"]
          }
        ]
      }
      record_section_data: {
        Row: {
          description: string
          get_section_data_sql: string
          id: number
        }
        Insert: {
          description: string
          get_section_data_sql: string
          id?: number
        }
        Update: {
          description?: string
          get_section_data_sql?: string
          id?: number
        }
        Relationships: []
      }
      record_table: {
        Row: {
          created_at: string
          data_jsonschema: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          data_jsonschema?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          data_jsonschema?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      record_table_column_labels: {
        Row: {
          column_name: string
          id: number
          is_external_link: boolean
          label_name: string
          record_table_id: number
        }
        Insert: {
          column_name: string
          id?: number
          is_external_link?: boolean
          label_name: string
          record_table_id: number
        }
        Update: {
          column_name?: string
          id?: number
          is_external_link?: boolean
          label_name?: string
          record_table_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "record_table_column_labels_record_table_id_fkey"
            columns: ["record_table_id"]
            isOneToOne: false
            referencedRelation: "record_table"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_module_section_data_with_app_filter: {
        Args: {
          url_module: string
          url_app: string
        }
        Returns: {
          data: Json
        }[]
      }
      get_record_section_data_with_section_filter: {
        Args: {
          record_id: number
          record_table: string
          app_name: string
        }
        Returns: {
          data: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
