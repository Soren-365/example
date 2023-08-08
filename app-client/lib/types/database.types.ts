export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  conferati: {
    Tables: {
      app_whitefilter_st: {
        Row: {
          app_id: number
          column_address: string
          created_at: string | null
          filter: string
          id: number
          table_address: string
        }
        Insert: {
          app_id: number
          column_address?: string
          created_at?: string | null
          filter: string
          id?: number
          table_address: string
        }
        Update: {
          app_id?: number
          column_address?: string
          created_at?: string | null
          filter?: string
          id?: number
          table_address?: string
        }
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
          id?: never
          name: string
          type: string
        }
        Update: {
          created_at?: string
          id?: never
          name?: string
          type?: string
        }
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
          id?: never
          organization: number
          person: number
          start_date?: string | null
          title: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: never
          organization?: number
          person?: number
          start_date?: string | null
          title?: string
        }
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
          id?: never
          last_name: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          first_name?: string
          id?: never
          last_name?: string
          local_image_url?: string | null
          wikipedia_page?: string | null
        }
      }
      record_section_blackfilter_st: {
        Row: {
          column_address: string
          created_at: string | null
          filter: string
          id: number
          record_section_id: number
          table_address: string
        }
        Insert: {
          column_address?: string
          created_at?: string | null
          filter: string
          id?: number
          record_section_id: number
          table_address: string
        }
        Update: {
          column_address?: string
          created_at?: string | null
          filter?: string
          id?: number
          record_section_id?: number
          table_address?: string
        }
      }
      record_section_whitefilter_st: {
        Row: {
          column_address: string
          created_at: string | null
          filter: string
          id: number
          record_section_id: number
          table_address: string
        }
        Insert: {
          column_address?: string
          created_at?: string | null
          filter: string
          id?: number
          record_section_id: number
          table_address: string
        }
        Update: {
          column_address?: string
          created_at?: string | null
          filter?: string
          id?: number
          record_section_id?: number
          table_address?: string
        }
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
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
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
          id: number
          logo_url: string
          url_name: string
        }
        Insert: {
          admin?: string | null
          created_at?: string
          id?: never
          logo_url: string
          url_name: string
        }
        Update: {
          admin?: string | null
          created_at?: string
          id?: never
          logo_url?: string
          url_name?: string
        }
      }
      jsonb_column_data: {
        Row: {
          combined: Json | null
        }
        Insert: {
          combined?: Json | null
        }
        Update: {
          combined?: Json | null
        }
      }
      jsonb_record_label_data: {
        Row: {
          combined: Json | null
        }
        Insert: {
          combined?: Json | null
        }
        Update: {
          combined?: Json | null
        }
      }
      module_section: {
        Row: {
          app_filter_address: string | null
          created_at: string
          id: number
          joining_name: string | null
          module_section_data: number
          page_module: number
          record_name: string
          richtext: string | null
          second_parent_name: string | null
          title: string
          vertical_page_position: number | null
        }
        Insert: {
          app_filter_address?: string | null
          created_at?: string
          id?: number
          joining_name?: string | null
          module_section_data: number
          page_module: number
          record_name: string
          richtext?: string | null
          second_parent_name?: string | null
          title: string
          vertical_page_position?: number | null
        }
        Update: {
          app_filter_address?: string | null
          created_at?: string
          id?: number
          joining_name?: string | null
          module_section_data?: number
          page_module?: number
          record_name?: string
          richtext?: string | null
          second_parent_name?: string | null
          title?: string
          vertical_page_position?: number | null
        }
      }
      module_section_columns_shown: {
        Row: {
          column_position: number
          id: number
          module_section_id: number
          record_type_column_labels_id: number
          ui_links_to_record: boolean
        }
        Insert: {
          column_position: number
          id?: never
          module_section_id: number
          record_type_column_labels_id: number
          ui_links_to_record?: boolean
        }
        Update: {
          column_position?: number
          id?: never
          module_section_id?: number
          record_type_column_labels_id?: number
          ui_links_to_record?: boolean
        }
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
          id?: never
        }
        Update: {
          description?: string | null
          get_section_data_sql?: string
          id?: never
        }
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
          id?: never
          title?: string | null
          url_name: string
        }
        Update: {
          app?: string
          created_at?: string
          id?: never
          title?: string | null
          url_name?: string
        }
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
          id?: never
          record_name: string
          title: string
        }
        Update: {
          app?: string
          created_at?: string
          description?: string | null
          id?: never
          record_name?: string
          title?: string
        }
      }
      record_section: {
        Row: {
          createdAt: string
          id: number
          joining_name: string | null
          page_record: number
          record_section_data: number
          second_parent_name: string | null
          title: string | null
          vertical_page_position: number | null
        }
        Insert: {
          createdAt?: string
          id?: never
          joining_name?: string | null
          page_record: number
          record_section_data: number
          second_parent_name?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
        Update: {
          createdAt?: string
          id?: never
          joining_name?: string | null
          page_record?: number
          record_section_data?: number
          second_parent_name?: string | null
          title?: string | null
          vertical_page_position?: number | null
        }
      }
      record_section_columns_shown: {
        Row: {
          column_position: number | null
          id: number
          record_section_id: number
          record_type_column_labels_id: number
          ui_links_to_record: boolean
        }
        Insert: {
          column_position?: number | null
          id?: never
          record_section_id: number
          record_type_column_labels_id: number
          ui_links_to_record?: boolean
        }
        Update: {
          column_position?: number | null
          id?: never
          record_section_id?: number
          record_type_column_labels_id?: number
          ui_links_to_record?: boolean
        }
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
          id?: never
        }
        Update: {
          description?: string
          get_section_data_sql?: string
          id?: never
        }
      }
      record_type: {
        Row: {
          created_at: string
          data_jsonschema: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          data_jsonschema?: string | null
          id?: never
          name: string
        }
        Update: {
          created_at?: string
          data_jsonschema?: string | null
          id?: never
          name?: string
        }
      }
      record_type_column_labels: {
        Row: {
          column_name: string
          id: number
          is_external_link: boolean
          label_name: string
          record_type_id: number
        }
        Insert: {
          column_name: string
          id?: never
          is_external_link?: boolean
          label_name: string
          record_type_id: number
        }
        Update: {
          column_name?: string
          id?: never
          is_external_link?: boolean
          label_name?: string
          record_type_id?: number
        }
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
          record_type: string
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
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

